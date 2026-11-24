from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.sort_by import SortByOrStr
from .enums.sort_order_aws_code_build_aws_codebuild_x_amz_target_codebuild20161006_listprojects_api import (
    SortOrderAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListprojectsApiOrStr,
)


class ListProjectsInput(SdkBaseModel):
    sort_by: Optional[SortByOrStr] = Field(default=UNSET, alias="sortBy")
    """The criterion to be used to list build project names. Valid values include: CREATED_TIME: List based on when each
    build project was created. LAST_MODIFIED_TIME: List based on when information about each build project was last
    changed. NAME: List based on each build project's name. Use sortOrder to specify in what order to list the build
    project names based on the preceding criteria."""

    sort_order: Optional[SortOrderAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListprojectsApiOrStr] = Field(
        default=UNSET, alias="sortOrder"
    )
    """The order in which to list build projects. Valid values include: ASCENDING: List in ascending order. DESCENDING:
    List in descending order. Use sortBy to specify the criterion to be used to list build project names."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """During a previous call, if there are more than 100 items in the list, only the first 100 items are returned,
    along with a unique string called a nextToken. To get the next batch of items in the list, call this operation
    again, adding the next token to the call. To get all of the items in the list, keep calling this operation with each
    subsequent next token that is returned, until no more next tokens are returned."""


class ListProjectsInputDict(TypedDict):
    sort_by: NotRequired[SortByOrStr]
    sort_order: NotRequired[SortOrderAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListprojectsApiOrStr]
    next_token: NotRequired[str]
