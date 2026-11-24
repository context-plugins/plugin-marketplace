from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.data_type import DataTypeOrStr


class CreateAttributeRequest(SdkBaseModel):
    """Parameters for creating or updating an attribute."""

    name: str
    """Display name for the attribute."""

    key: str
    """Machine-readable key for the attribute."""

    data_type: DataTypeOrStr
    """Data type of the attribute."""


class CreateAttributeRequestDict(TypedDict):
    name: str
    key: str
    data_type: DataTypeOrStr
