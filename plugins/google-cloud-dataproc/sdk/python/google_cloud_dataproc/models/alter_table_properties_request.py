from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AlterTablePropertiesRequest(SdkBaseModel):
    """Request message for DataprocMetastore.AlterTableProperties."""

    table_name: Optional[str] = Field(default=UNSET, alias="tableName")
    """Required. The name of the table containing the properties you're altering in the following
    format.databases/{database_id}/tables/{table_id}"""

    properties: Optional[dict[str, str]] = UNSET
    """A map that describes the desired values to mutate. If update_mask is empty, the properties will not update.
    Otherwise, the properties only alters the value whose associated paths exist in the update mask"""

    update_mask: Optional[str] = Field(default=UNSET, alias="updateMask")
    """A field mask that specifies the metadata table properties that are overwritten by the update. Fields specified in
    the update_mask are relative to the resource (not to the full request). A field is overwritten if it is in the
    mask.For example, given the target properties: properties { a: 1 b: 2 } And an update properties: properties { a: 2
    b: 3 c: 4 } then if the field mask is:paths: "properties.b", "properties.c"then the result will be: properties { a:
    1 b: 3 c: 4 }"""


class AlterTablePropertiesRequestDict(TypedDict):
    table_name: NotRequired[str]
    properties: NotRequired[dict[str, str]]
    update_mask: NotRequired[str]
