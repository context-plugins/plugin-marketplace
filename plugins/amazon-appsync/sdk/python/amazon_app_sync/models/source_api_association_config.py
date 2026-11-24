from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.merge_type import MergeTypeOrStr


class SourceApiAssociationConfig(SdkBaseModel):
    merge_type: Optional[MergeTypeOrStr] = Field(default=UNSET, alias="mergeType")
    """The property that indicates which merging option is enabled in the source API association. Valid merge types are
    MANUAL_MERGE (default) and AUTO_MERGE. Manual merges are the default behavior and require the user to trigger any
    changes from the source APIs to the merged API manually. Auto merges subscribe the merged API to the changes
    performed on the source APIs so that any change in the source APIs are also made to the merged API. Auto merges use
    MergedApiExecutionRoleArn to perform merge operations."""


class SourceApiAssociationConfigDict(TypedDict):
    merge_type: NotRequired[MergeTypeOrStr]
