from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.modality1 import Modality1OrStr
from .enums.status_amazon_lex_model_building_v2_testsets_api import StatusAmazonLexModelBuildingV2TestsetsApiOrStr
from .test_set_storage_location import TestSetStorageLocation, TestSetStorageLocationDict


class TestSetSummary(SdkBaseModel):
    test_set_id: Optional[str] = Field(default=UNSET, alias="testSetId")
    """The unique identifier of the test set."""

    test_set_name: Optional[str] = Field(default=UNSET, alias="testSetName")
    """The name of the test set."""

    description: Optional[str] = UNSET
    """The description of the test set."""

    modality: Optional[Modality1OrStr] = UNSET
    """Specifies whether the test set contains written or spoken data."""

    status: Optional[StatusAmazonLexModelBuildingV2TestsetsApiOrStr] = UNSET
    """The status of the test set."""

    role_arn: Optional[str] = Field(default=UNSET, alias="roleArn")
    """The Amazon Resource Name (ARN) of an IAM role that has permission to access the test set."""

    num_turns: Optional[int] = Field(default=UNSET, alias="numTurns")
    """The number of turns in the test set."""

    storage_location: Optional[TestSetStorageLocation] = Field(default=UNSET, alias="storageLocation")
    creation_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="creationDateTime")
    """The date and time at which the test set was created."""

    last_updated_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastUpdatedDateTime")
    """The date and time at which the test set was last updated."""


class TestSetSummaryDict(TypedDict):
    test_set_id: NotRequired[str]
    test_set_name: NotRequired[str]
    description: NotRequired[str]
    modality: NotRequired[Modality1OrStr]
    status: NotRequired[StatusAmazonLexModelBuildingV2TestsetsApiOrStr]
    role_arn: NotRequired[str]
    num_turns: NotRequired[int]
    storage_location: NotRequired[TestSetStorageLocationDict]
    creation_date_time: NotRequired[RFC3339DateTime]
    last_updated_date_time: NotRequired[RFC3339DateTime]
