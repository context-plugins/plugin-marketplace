from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .policy1 import Policy1, Policy1Dict


class SetIamPolicyRequest(SdkBaseModel):
    """Request message for ``SetIamPolicy`` method."""

    policy: Optional[Policy1] = UNSET
    """REQUIRED: The complete policy to be applied to the ``resource``. The size of the policy is limited to a few 10s
    of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them."""


class SetIamPolicyRequestDict(TypedDict):
    policy: NotRequired[Policy1Dict]
