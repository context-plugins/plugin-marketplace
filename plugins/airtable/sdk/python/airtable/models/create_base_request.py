from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .table import Table, TableDict


class CreateBaseRequest(SdkBaseModel):
    """Request body for creating a new base."""

    name: str
    """The name of the new base."""

    workspace_id: str = Field(alias="workspaceId")
    """The ID of the workspace where the base will be created (starts with 'wsp')."""

    tables: list[Table]
    """The initial table definitions for the base."""


class CreateBaseRequestDict(TypedDict):
    name: str
    workspace_id: str
    tables: list[TableDict]
