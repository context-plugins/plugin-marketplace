from __future__ import annotations

from typing import TypeAlias

from ..news_batch_response import NewsBatchResponse, NewsBatchResponseDict
from ..news_response import NewsResponse, NewsResponseDict

NewsResponse1: TypeAlias = NewsResponse | NewsBatchResponse

NewsResponse1Dict: TypeAlias = NewsResponseDict | NewsBatchResponseDict
