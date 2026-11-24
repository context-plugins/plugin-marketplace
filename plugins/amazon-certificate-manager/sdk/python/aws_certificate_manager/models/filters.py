from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.export_option3 import ExportOption3OrStr
from .enums.extended_key_usage2 import ExtendedKeyUsage2OrStr
from .enums.key_type import KeyTypeOrStr
from .enums.key_usage2 import KeyUsage2OrStr
from .enums.managed_by import ManagedByOrStr


class Filters(SdkBaseModel):
    extended_key_usage: Optional[list[ExtendedKeyUsage2OrStr]] = Field(default=UNSET, alias="extendedKeyUsage")
    """Specify one or more ExtendedKeyUsage extension values."""

    key_usage: Optional[list[KeyUsage2OrStr]] = Field(default=UNSET, alias="keyUsage")
    """Specify one or more KeyUsage extension values."""

    key_types: Optional[list[KeyTypeOrStr]] = Field(default=UNSET, alias="keyTypes")
    """Specify one or more algorithms that can be used to generate key pairs. Default filtering returns only RSA_1024
    and RSA_2048 certificates that have at least one domain. To return other certificate types, provide the desired type
    signatures in a comma-separated list. For example, "keyTypes": ["RSA_2048","RSA_4096"] returns both RSA_2048 and
    RSA_4096 certificates."""

    export_option: Optional[ExportOption3OrStr] = Field(default=UNSET, alias="exportOption")
    """Specify ENABLED or DISABLED to identify certificates that can be exported."""

    managed_by: Optional[ManagedByOrStr] = Field(default=UNSET, alias="managedBy")
    """Identifies the Amazon Web Services service that manages the certificate issued by ACM."""


class FiltersDict(TypedDict):
    extended_key_usage: NotRequired[list[ExtendedKeyUsage2OrStr]]
    key_usage: NotRequired[list[KeyUsage2OrStr]]
    key_types: NotRequired[list[KeyTypeOrStr]]
    export_option: NotRequired[ExportOption3OrStr]
    managed_by: NotRequired[ManagedByOrStr]
