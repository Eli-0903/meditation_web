from django.db import models

class Artiles(models.Model):
    title = models.CharField('Название', max_length=50)
    anons = models.CharField('Анонс', max_length=250)
    full_text = models.TextField('Статья', max_length=50)
    data = models.DateTimeField('Дата публикации')

    def __str__(self):
        return self.title
