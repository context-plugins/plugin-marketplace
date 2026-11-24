from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApihubV1AllowedValue(SdkBaseModel):
    """The value that can be assigned to the attribute when the data type is enum."""

    description: Optional[str] = UNSET
    """Optional. The detailed description of the allowed value."""

    immutable: Optional[bool] = UNSET
    """Optional. When set to true, the allowed value cannot be updated or deleted by the user. It can only be true for
    System defined attributes."""

    id: Optional[str] = UNSET
    """Required. The ID of the allowed value. * If provided, the same will be used. The service will throw an error if
    the specified id is already used by another allowed value in the same attribute resource. * If not provided, a
    system generated id derived from the display name will be used. In this case, the service will handle conflict
    resolution by adding a system generated suffix in case of duplicates. This value should be 3-500 characters, and
    valid characters are /a-z[0-9]-_/."""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """Required. The display name of the allowed value."""


class GoogleCloudApihubV1AllowedValueDict(TypedDict):
    description: NotRequired[str]
    immutable: NotRequired[bool]
    id: NotRequired[str]
    display_name: NotRequired[str]
