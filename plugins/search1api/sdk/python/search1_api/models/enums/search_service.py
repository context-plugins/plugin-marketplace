from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SearchService(str, Enum):
    GOOGLE = "google"
    BING = "bing"
    BINGCN = "bingcn"
    DUCKDUCKGO = "duckduckgo"
    YAHOO = "yahoo"
    YANDEX = "yandex"
    YOUTUBE = "youtube"
    X = "x"
    REDDIT = "reddit"
    GITHUB = "github"
    ARXIV = "arxiv"
    WECHAT = "wechat"
    BILIBILI = "bilibili"
    IMDB = "imdb"
    WIKIPEDIA = "wikipedia"
    BAIDU = "baidu"
    _360 = "360"
    QUARK = "quark"

    __str__ = str.__str__


SearchServiceOrStr: TypeAlias = Annotated[SearchService | str, open_enum_validator(SearchService)]
