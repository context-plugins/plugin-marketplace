from __future__ import annotations

from typing import TypeAlias

from ..news_parameters import NewsParameters, NewsParametersDict

NewsRequest: TypeAlias = NewsParameters | list[NewsParameters]

NewsRequestDict: TypeAlias = NewsParametersDict | list[NewsParametersDict]
