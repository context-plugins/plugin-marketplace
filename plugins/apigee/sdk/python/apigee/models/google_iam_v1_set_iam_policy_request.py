from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_iam_v1_policy2 import GoogleIamV1Policy2, GoogleIamV1Policy2Dict


class GoogleIamV1SetIamPolicyRequest(SdkBaseModel):
    """Request message for ``SetIamPolicy`` method."""

    update_mask: Optional[str] = Field(default=UNSET, alias="updateMask")
    """OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be
    modified. If no mask is provided, the following default mask is used: ``paths: "bindings, etag"``"""

    policy: Optional[GoogleIamV1Policy2] = UNSET
    """REQUIRED: The complete policy to be applied to the ``resource``. The size of the policy is limited to a few 10s
    of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them."""


class GoogleIamV1SetIamPolicyRequestDict(TypedDict):
    update_mask: NotRequired[str]
    policy: NotRequired[GoogleIamV1Policy2Dict]
