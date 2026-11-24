from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GetResourcePolicyOutput(SdkBaseModel):
    policy: Optional[str] = UNSET
    """The resource policy for the resource identified by the input ARN parameter."""


class GetResourcePolicyOutputDict(TypedDict):
    policy: NotRequired[str]
