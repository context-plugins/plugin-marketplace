from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .custom import Custom, CustomDict
from .dbt import Dbt, DbtDict
from .dbt_cloud import DbtCloud, DbtCloudDict
from .raw import Raw, RawDict
from .table import Table, TableDict
from .user_reference import UserReference, UserReferenceDict
from .visual import Visual, VisualDict


class Model(SdkBaseModel):
    """The SQL query that pulls data from your source to send to your destination. We send your SQL query directly to
    your source so any SQL that is valid for your source (including functions) is valid in Hightouch."""

    model_config = ConfigDict(extra="forbid")

    id: float
    """The id of the model"""

    name: str
    """The name of the model"""

    slug: str
    """The slug of the model"""

    description: str | None
    """The description of the model. Null when no description has been set."""

    workspace_id: float = Field(alias="workspaceId")
    """The id of the workspace where the model belongs to"""

    primary_key: str = Field(alias="primaryKey")
    """The primary key will be null if the query doesn't get directly synced (e.g. a relationship table for visual
    querying)"""

    created_at: RFC3339DateTime = Field(alias="createdAt")
    """The timestamp when model was created"""

    updated_at: RFC3339DateTime = Field(alias="updatedAt")
    """The timestamp when model was lastly updated"""

    created_by: UserReference = Field(alias="createdBy")
    """The user who created the model, or null if no user was recorded"""

    updated_by: UserReference = Field(alias="updatedBy")
    """The user who last updated the model, or null if no user was recorded"""

    source_id: float = Field(alias="sourceId")
    """The id of the source that model is connected to"""

    query_type: str = Field(alias="queryType")
    """The type of the query. Available options: custom, raw_sql, tabel, dbt and visual."""

    tags: dict[str, str]
    """The tags of the model"""

    is_schema: bool = Field(alias="isSchema")
    """If is_schema is true, the model is just used to build other models. Either as part of visual querying, or as the
    root of a visual query."""

    is_general_model: bool = Field(alias="isGeneralModel")
    """If is_general_model is true, the model is not synced. It exposes warehouse data to Hightouch AI agents and is
    managed from the schema section."""

    syncs: list[float]
    """The list of id of syncs that uses this model"""

    visual: Optional[Visual] = UNSET
    """Visual query, used by audience"""

    custom: Optional[Custom] = UNSET
    """Custom query for sources that doesn't support sql. For example, Airtable."""

    table: Optional[Table] = UNSET
    """Table-based query that fetches on a table instead of SQL"""

    dbt: Optional[Dbt] = UNSET
    """Query that is based on a dbt model"""

    dbt_cloud: Optional[DbtCloud] = UNSET
    raw: Optional[Raw] = UNSET
    """Standard raw SQL query"""

    folder_id: Optional[str] = Field(default=UNSET, alias="folderId")
    last_run_size: float | None = Field(alias="lastRunSize")
    """The number of rows returned by the most recent successful sync run of this model. Null if the model has never
    been synced successfully."""

    space_id: Optional[str] = Field(default=UNSET, alias="spaceId")
    """The Space this audience belongs to. Applies only to workspaces with Spaces enabled; contact Hightouch to enable
    Spaces and to obtain Space ids. Only valid when queryType is "visual". Omitted for models that are not in a Space.
    An API key scoped to a Space must set it on create. Read-only after creation."""

    row_level_access_rule_ids: Optional[list[str]] = Field(default=UNSET, alias="rowLevelAccessRuleIds")
    """Row-level access rules attached to this audience. Applies only to workspaces with Spaces enabled. Only valid when
    queryType is "visual"; always present on an audience. When creating an audience in a Space, include one rule from
    each required row-level access group on the parent model. Rule ids come from the Spaces governance API. Read-only
    after creation."""


class ModelDict(TypedDict):
    id: float
    name: str
    slug: str
    description: str | None
    workspace_id: float
    primary_key: str
    created_at: RFC3339DateTime
    updated_at: RFC3339DateTime
    created_by: UserReferenceDict
    updated_by: UserReferenceDict
    source_id: float
    query_type: str
    tags: dict[str, str]
    is_schema: bool
    is_general_model: bool
    syncs: list[float]
    visual: NotRequired[VisualDict]
    custom: NotRequired[CustomDict]
    table: NotRequired[TableDict]
    dbt: NotRequired[DbtDict]
    dbt_cloud: NotRequired[DbtCloudDict]
    raw: NotRequired[RawDict]
    folder_id: NotRequired[str]
    last_run_size: float | None
    space_id: NotRequired[str]
    row_level_access_rule_ids: NotRequired[list[str]]
