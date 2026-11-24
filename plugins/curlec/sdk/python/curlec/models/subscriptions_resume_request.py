from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.resume_at import ResumeAtOrStr


class SubscriptionsResumeRequest(SdkBaseModel):
    resume_at: Optional[ResumeAtOrStr] = UNSET
    """When to resume. Currently only 'now' is supported."""


class SubscriptionsResumeRequestDict(TypedDict):
    resume_at: NotRequired[ResumeAtOrStr]
