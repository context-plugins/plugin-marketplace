from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .policy2 import Policy2, Policy2Dict


class SetIamPolicyRequest(SdkBaseModel):
    """Request message for ``SetIamPolicy`` method."""

    update_mask: Optional[str] = Field(default=UNSET, alias="updateMask")
    """OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be
    modified. If no mask is provided, the following default mask is used: ``paths: "bindings, etag"``"""

    policy: Optional[Policy2] = UNSET
    """REQUIRED: The complete policy to be applied to the ``resource``. The size of the policy is limited to a few 10s
    of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them."""


class SetIamPolicyRequestDict(TypedDict):
    update_mask: NotRequired[str]
    policy: NotRequired[Policy2Dict]
