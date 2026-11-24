from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CancelOrExitOrderErrorData(SdkBaseModel):
    error_code: Optional[str] = Field(default=UNSET, alias="errorCode")
    """Unique code for the error state"""

    message: Optional[str] = UNSET
    """Verbose message for the error state"""

    property_path: Optional[str] = Field(default=UNSET, alias="propertyPath")
    """Path to property failing validation"""

    invalid_value: Optional[Any] = Field(default=UNSET, alias="invalidValue")
    """Invalid value for the property failing validation"""

    error_code2: Optional[str] = Field(default=UNSET, alias="error_code")
    property_path2: Optional[str] = Field(default=UNSET, alias="property_path")
    invalid_value2: Optional[Any] = Field(default=UNSET, alias="invalid_value")
    instrument_key: Optional[str] = UNSET
    """Key of instrument"""

    order_id: Optional[str] = UNSET
    """Reference order ID"""


class CancelOrExitOrderErrorDataDict(TypedDict):
    error_code: NotRequired[str]
    message: NotRequired[str]
    property_path: NotRequired[str]
    invalid_value: NotRequired[Any]
    error_code2: NotRequired[str]
    property_path2: NotRequired[str]
    invalid_value2: NotRequired[Any]
    instrument_key: NotRequired[str]
    order_id: NotRequired[str]
