from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PublicationsPostsTestSendsRequest(SdkBaseModel):
    recipient_emails: list[str]
    """One or more email addresses to send the test to. Returns 422 if the daily test send limit has been reached."""


class PublicationsPostsTestSendsRequestDict(TypedDict):
    recipient_emails: list[str]
