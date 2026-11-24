from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import SdkBaseModel


class Contents(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    media_mail_eligible: bool = Field(default=False, alias="mediaMailEligible")
    """Set true only when the contents qualify under USPS Media Mail standards."""


class ContentsDict(TypedDict):
    media_mail_eligible: NotRequired[bool]
