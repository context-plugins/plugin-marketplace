from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .custom import Custom, CustomDict
from .dbt1 import Dbt1, Dbt1Dict
from .raw import Raw, RawDict
from .table import Table, TableDict
from .visual import Visual, VisualDict


class ModelUpdate(SdkBaseModel):
    """The input for updating a Model"""

    model_config = ConfigDict(extra="forbid")

    name: Optional[str] = UNSET
    """The name of the model"""

    description: OptionalNullable[str] = UNSET
    """The description of the model. Null when no description has been set."""

    is_schema: Optional[bool] = Field(default=UNSET, alias="isSchema")
    """If is_schema is true, the model is just used to build other models. Either as part of visual querying, or as the
    root of a visual query."""

    visual: Optional[Visual] = UNSET
    """Visual query, used by audience"""

    custom: Optional[Custom] = UNSET
    """Custom query for sources that doesn't support sql. For example, Airtable."""

    table: Optional[Table] = UNSET
    """Table-based query that fetches on a table instead of SQL"""

    raw: Optional[Raw] = UNSET
    """Standard raw SQL query"""

    folder_id: Optional[str] = Field(default=UNSET, alias="folderId")
    primary_key: Optional[str] = Field(default=UNSET, alias="primaryKey")
    """The primary key will be null if the query doesn't get directly synced (e.g. a relationship table for visual
    querying)"""

    dbt: Optional[Dbt1] = UNSET


class ModelUpdateDict(TypedDict):
    name: NotRequired[str]
    description: NotRequired[str | None]
    is_schema: NotRequired[bool]
    visual: NotRequired[VisualDict]
    custom: NotRequired[CustomDict]
    table: NotRequired[TableDict]
    raw: NotRequired[RawDict]
    folder_id: NotRequired[str]
    primary_key: NotRequired[str]
    dbt: NotRequired[Dbt1Dict]
