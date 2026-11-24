from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class PatchSourceGroupParams(SdkBaseModel):
    name: OptionalNullable[str] = UNSET
    """Unique name for the source group within the organization"""

    display_name: OptionalNullable[str] = Field(default=UNSET, alias="displayName")
    """Display name for the source group"""

    description: OptionalNullable[str] = UNSET
    """Description of the source group"""

    domains: OptionalNullable[list[str]] = UNSET
    """List of domains included in the source group"""


class PatchSourceGroupParamsDict(TypedDict):
    name: NotRequired[str | None]
    display_name: NotRequired[str | None]
    description: NotRequired[str | None]
    domains: NotRequired[list[str] | None]
