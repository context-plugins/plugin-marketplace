from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .identity_config2 import IdentityConfig2, IdentityConfig2Dict
from .kerberos_config3 import KerberosConfig3, KerberosConfig3Dict


class SecurityConfig(SdkBaseModel):
    """Security related configuration, including encryption, Kerberos, etc."""

    identity_config: Optional[IdentityConfig2] = Field(default=UNSET, alias="identityConfig")
    """Optional. Identity related configuration, including service account based secure multi-tenancy user mappings."""

    kerberos_config: Optional[KerberosConfig3] = Field(default=UNSET, alias="kerberosConfig")
    """Optional. Kerberos related configuration."""


class SecurityConfigDict(TypedDict):
    identity_config: NotRequired[IdentityConfig2Dict]
    kerberos_config: NotRequired[KerberosConfig3Dict]
