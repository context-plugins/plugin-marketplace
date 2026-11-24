from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ValueUiPathOrchestratorRolesApi(SdkBaseModel):
    id: Optional[int] = Field(default=UNSET, alias="Id")
    """Unique role identifier"""

    name: Optional[str] = Field(default=UNSET, alias="Name")
    """Display name of the role"""

    display_name: Optional[str] = Field(default=UNSET, alias="DisplayName")
    """Human-readable display name for the role"""

    is_static: Optional[bool] = Field(default=UNSET, alias="IsStatic")
    """Whether this is a built-in system role that cannot be deleted"""


class ValueUiPathOrchestratorRolesApiDict(TypedDict):
    id: NotRequired[int]
    name: NotRequired[str]
    display_name: NotRequired[str]
    is_static: NotRequired[bool]
