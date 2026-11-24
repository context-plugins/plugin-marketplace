from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class IdentityConfig(SdkBaseModel):
    """Identity related configuration, including service account based secure multi-tenancy user mappings."""

    user_service_account_mapping: Optional[dict[str, str]] = Field(default=UNSET, alias="userServiceAccountMapping")
    """Required. Map of user to service account."""

    enable_ssh: Optional[bool] = Field(default=UNSET, alias="enableSsh")
    """Optional. Whether to enable SSH access for the cluster. The default is true for image versions prior to 3.1 and
    false for image versions 3.1 and later. The default behavior can be changed when creating clusters using image
    versions 2.3.30 and later."""


class IdentityConfigDict(TypedDict):
    user_service_account_mapping: NotRequired[dict[str, str]]
    enable_ssh: NotRequired[bool]
