from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.type_circleci_project_api import TypeCircleciProjectApiOrStr


class CheckoutKeyCircleCiRestApiV1SshKeyApi(SdkBaseModel):
    public_key: Optional[str] = UNSET
    """The public SSH key"""

    type_: Optional[TypeCircleciProjectApiOrStr] = Field(default=UNSET, alias="type")
    """The type of checkout key"""

    fingerprint: Optional[str] = UNSET
    """The MD5 fingerprint of the key"""

    preferred: Optional[bool] = UNSET
    """Whether this is the preferred key"""

    login: Optional[str] = UNSET
    """The login associated with the key"""

    time: Optional[RFC3339DateTime] = UNSET
    """When the key was created"""


class CheckoutKeyCircleCiRestApiV1SshKeyApiDict(TypedDict):
    public_key: NotRequired[str]
    type_: NotRequired[TypeCircleciProjectApiOrStr]
    fingerprint: NotRequired[str]
    preferred: NotRequired[bool]
    login: NotRequired[str]
    time: NotRequired[RFC3339DateTime]
