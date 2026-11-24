from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .newsletter_list_subscription_info import NewsletterListSubscriptionInfo, NewsletterListSubscriptionInfoDict


class NewsletterListSubscriptionResponse(SdkBaseModel):
    data: NewsletterListSubscriptionInfo


class NewsletterListSubscriptionResponseDict(TypedDict):
    data: NewsletterListSubscriptionInfoDict
