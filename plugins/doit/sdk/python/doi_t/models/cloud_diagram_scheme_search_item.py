from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CloudDiagramSchemeSearchItem(SdkBaseModel):
    """A diagram layer (cloud account) matching the search query."""

    id: str = Field(alias="_id")
    """Layer ID."""

    account_name: Optional[str] = UNSET
    """Cloud account name."""

    scheme_id: Optional[str] = UNSET
    """Parent diagram ID."""

    ss_id: Optional[str] = UNSET
    """Layer ID (same as _id)."""

    scheme: Optional[str] = UNSET
    """Parent diagram name."""

    status: Optional[str] = UNSET
    """Import/sync status."""

    name: Optional[str] = UNSET
    """Layer name."""

    type_: Literal["statussheet"] = Field(default="statussheet", alias="type")
    """Component type — always "statussheet" for this category."""


class CloudDiagramSchemeSearchItemDict(TypedDict):
    id: str
    account_name: NotRequired[str]
    scheme_id: NotRequired[str]
    ss_id: NotRequired[str]
    scheme: NotRequired[str]
    status: NotRequired[str]
    name: NotRequired[str]
    type_: Literal["statussheet"]
