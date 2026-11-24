from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .get_policy_options1 import GetPolicyOptions1, GetPolicyOptions1Dict


class GetIamPolicyRequest(SdkBaseModel):
    """Request message for GetIamPolicy method."""

    options: Optional[GetPolicyOptions1] = UNSET
    """OPTIONAL: A GetPolicyOptions object for specifying options to GetIamPolicy."""


class GetIamPolicyRequestDict(TypedDict):
    options: NotRequired[GetPolicyOptions1Dict]
