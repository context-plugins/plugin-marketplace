from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .custom import Custom, CustomDict
from .dbt1 import Dbt1, Dbt1Dict
from .dbt_cloud1 import DbtCloud1, DbtCloud1Dict
from .raw import Raw, RawDict
from .table import Table, TableDict
from .visual import Visual, VisualDict


class ModelCreate(SdkBaseModel):
    """The input for creating a Model"""

    model_config = ConfigDict(extra="forbid")

    name: str
    """The name of the model"""

    slug: str
    """The slug of the model"""

    query_type: str = Field(alias="queryType")
    """The type of the query. Available options: custom, raw_sql, tabel, dbt and visual."""

    source_id: float = Field(alias="sourceId")
    """The id of the source that model is connected to"""

    is_schema: bool = Field(alias="isSchema")
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
    space_id: Optional[str] = Field(default=UNSET, alias="spaceId")
    """The Space this audience belongs to. Applies only to workspaces with Spaces enabled; contact Hightouch to enable
    Spaces and to obtain Space ids. Only valid when queryType is "visual". Omitted for models that are not in a Space.
    An API key scoped to a Space must set it on create. Read-only after creation."""

    row_level_access_rule_ids: Optional[list[str]] = Field(default=UNSET, alias="rowLevelAccessRuleIds")
    """Row-level access rules attached to this audience. Applies only to workspaces with Spaces enabled. Only valid when
    queryType is "visual"; always present on an audience. When creating an audience in a Space, include one rule from
    each required row-level access group on the parent model. Rule ids come from the Spaces governance API. Read-only
    after creation."""

    primary_key: Optional[str] = Field(default=UNSET, alias="primaryKey")
    """The primary key will be null if the query doesn't get directly synced (e.g. a relationship table for visual
    querying). Optional here but actually conditionally required: every model except a general model must supply one."""

    is_general_model: Optional[bool] = Field(default=UNSET, alias="isGeneralModel")
    """Create a general model: a model that exposes warehouse data to Hightouch AI agents instead of being synced. Takes
    no primaryKey and no folderId, and cannot be a schema model, and only supports certain query types."""

    description: Optional[str] = UNSET
    """The description of the model. On a general model this is the context AI agents read to decide when to use it."""

    dbt: Optional[Dbt1] = UNSET
    dbt_cloud: Optional[DbtCloud1] = UNSET


class ModelCreateDict(TypedDict):
    name: str
    slug: str
    query_type: str
    source_id: float
    is_schema: bool
    visual: NotRequired[VisualDict]
    custom: NotRequired[CustomDict]
    table: NotRequired[TableDict]
    raw: NotRequired[RawDict]
    folder_id: NotRequired[str]
    space_id: NotRequired[str]
    row_level_access_rule_ids: NotRequired[list[str]]
    primary_key: NotRequired[str]
    is_general_model: NotRequired[bool]
    description: NotRequired[str]
    dbt: NotRequired[Dbt1Dict]
    dbt_cloud: NotRequired[DbtCloud1Dict]
