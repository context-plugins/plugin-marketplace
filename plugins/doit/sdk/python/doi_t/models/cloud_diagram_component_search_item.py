from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.node_type import NodeTypeOrStr
from .enums.type4 import Type4OrStr
from .props import Props, PropsDict


class CloudDiagramComponentSearchItem(SdkBaseModel):
    """A component matching the search query."""

    id: str = Field(alias="_id")
    """Component ID."""

    account_name: Optional[str] = UNSET
    """Cloud account name."""

    icon: Optional[str] = UNSET
    """Component icon identifier."""

    color: Optional[str] = UNSET
    """Component color."""

    scheme_id: Optional[str] = UNSET
    """Parent diagram ID."""

    ss_id: Optional[str] = UNSET
    """Layer ID."""

    name: Optional[str] = UNSET
    """Component name."""

    type_: Type4OrStr = Field(alias="type")
    """Component type."""

    node_type: Optional[NodeTypeOrStr] = UNSET
    """Node type."""

    group_type: Optional[str] = UNSET
    """Group type (for group components)."""

    props: Optional[Props] = UNSET
    """Component properties. For the "prop" category contains the matched property key-value pairs."""


class CloudDiagramComponentSearchItemDict(TypedDict):
    id: str
    account_name: NotRequired[str]
    icon: NotRequired[str]
    color: NotRequired[str]
    scheme_id: NotRequired[str]
    ss_id: NotRequired[str]
    name: NotRequired[str]
    type_: Type4OrStr
    node_type: NotRequired[NodeTypeOrStr]
    group_type: NotRequired[str]
    props: NotRequired[PropsDict]
