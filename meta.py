import scrapy
from scrapy.selector import Selector
from scrapy.http import HtmlResponse
  
response = HtmlResponse(
  body=body
)


Selector(response=response).xpath('/html/head/meta[1]')


class MetaData:
  name ='meta'
    url=['http://www.k12engineering.net/transcripts/ep2.html']

  def parse(self, response):
      for episode in response.xpath(/html/head):
        yield {
          'id': response.xpath().get(),
          'episode_id_season': response.xpath(/html/head/meta[2)).get(),
          'title': response.xpath().get(/html/head/meta[12]),
          'desctiption_short': response.xpath().get(/html/head/meta[7]),
          'desctiption_long': response.xpath().get(),
          'date_released': response.xpath().get(/html/body/div[1]/div[2]/div[1]/span[2]/div/p[7]),
          'date_transcribed'; response.xpath().get(),
        }
  next_page = /// code to go here 
  if next_page is not None: 
      yield response.follow(next_page, self.parse)

