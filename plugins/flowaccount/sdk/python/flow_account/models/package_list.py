from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class PackageList(SdkBaseModel):
    id: Optional[int] = UNSET
    package_name: str = Field(alias="packageName")
    description: OptionalNullable[str] = UNSET
    configuration: str
    remarks: OptionalNullable[str] = UNSET
    display_name_th: OptionalNullable[str] = Field(default=UNSET, alias="displayNameTH")
    display_name_en: OptionalNullable[str] = Field(default=UNSET, alias="displayNameEN")


class PackageListDict(TypedDict):
    id: NotRequired[int]
    package_name: str
    description: NotRequired[str | None]
    configuration: str
    remarks: NotRequired[str | None]
    display_name_th: NotRequired[str | None]
    display_name_en: NotRequired[str | None]
