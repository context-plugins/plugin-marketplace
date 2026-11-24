from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .newsletter_list_info import NewsletterListInfo, NewsletterListInfoDict


class NewsletterListResponse(SdkBaseModel):
    data: NewsletterListInfo


class NewsletterListResponseDict(TypedDict):
    data: NewsletterListInfoDict
