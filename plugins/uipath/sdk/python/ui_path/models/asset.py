from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.value_type import ValueTypeOrStr


class Asset(SdkBaseModel):
    """A shared asset storing a value accessible to automation processes"""

    id: Optional[int] = Field(default=UNSET, alias="Id")
    """Unique integer identifier of the asset"""

    name: Optional[str] = Field(default=UNSET, alias="Name")
    """Display name of the asset"""

    value_type: Optional[ValueTypeOrStr] = Field(default=UNSET, alias="ValueType")
    """Data type of the asset value"""

    string_value: Optional[str] = Field(default=UNSET, alias="StringValue")
    """Value when ValueType is Text"""

    int_value: Optional[int] = Field(default=UNSET, alias="IntValue")
    """Value when ValueType is Integer"""

    bool_value: Optional[bool] = Field(default=UNSET, alias="BoolValue")
    """Value when ValueType is Bool"""

    credential_username: Optional[str] = Field(default=UNSET, alias="CredentialUsername")
    """Username portion when ValueType is Credential"""

    credential_password: Optional[str] = Field(default=UNSET, alias="CredentialPassword")
    """Password portion when ValueType is Credential (write-only)"""

    description: Optional[str] = Field(default=UNSET, alias="Description")
    """Optional description of the asset's purpose"""

    organization_unit_id: Optional[int] = Field(default=UNSET, alias="OrganizationUnitId")
    """ID of the folder in which this asset resides"""


class AssetDict(TypedDict):
    id: NotRequired[int]
    name: NotRequired[str]
    value_type: NotRequired[ValueTypeOrStr]
    string_value: NotRequired[str]
    int_value: NotRequired[int]
    bool_value: NotRequired[bool]
    credential_username: NotRequired[str]
    credential_password: NotRequired[str]
    description: NotRequired[str]
    organization_unit_id: NotRequired[int]
