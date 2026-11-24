from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.label_sapling_detection_api import LabelSaplingDetectionApiOrInt
from .usage import Usage, UsageDict


class ApiV1ProfanityResponse(SdkBaseModel):
    labels: Optional[list[LabelSaplingDetectionApiOrInt]] = UNSET
    toks: Optional[list[str]] = UNSET
    usage: Optional[Usage] = UNSET
    """Present only when the request sent return_usage: true. characters is the billable character count the request
    submitted; see the return_usage request field for the exact semantics."""


class ApiV1ProfanityResponseDict(TypedDict):
    labels: NotRequired[list[LabelSaplingDetectionApiOrInt]]
    toks: NotRequired[list[str]]
    usage: NotRequired[UsageDict]
