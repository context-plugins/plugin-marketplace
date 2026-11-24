from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.modality_amazon_lex_model_building_v2_testsets_api import ModalityAmazonLexModelBuildingV2TestsetsApiOrStr
from .enums.status_amazon_lex_model_building_v2_testsets_api import StatusAmazonLexModelBuildingV2TestsetsApiOrStr
from .test_set_storage_location import TestSetStorageLocation, TestSetStorageLocationDict


class DescribeTestSetResponse(SdkBaseModel):
    test_set_id: Optional[str] = Field(default=UNSET, alias="testSetId")
    """The test set Id for the test set response."""

    test_set_name: Optional[str] = Field(default=UNSET, alias="testSetName")
    """The test set name of the test set."""

    description: Optional[str] = UNSET
    """The description of the test set."""

    modality: Optional[ModalityAmazonLexModelBuildingV2TestsetsApiOrStr] = UNSET
    """Indicates whether the test set is audio or text data."""

    status: Optional[StatusAmazonLexModelBuildingV2TestsetsApiOrStr] = UNSET
    """The status of the test set."""

    role_arn: Optional[str] = Field(default=UNSET, alias="roleArn")
    """The roleARN used for any operation in the test set to access resources in the Amazon Web Services account."""

    num_turns: Optional[int] = Field(default=UNSET, alias="numTurns")
    """The total number of agent and user turn in the test set."""

    storage_location: Optional[TestSetStorageLocation] = Field(default=UNSET, alias="storageLocation")
    creation_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="creationDateTime")
    """The creation date and time for the test set data."""

    last_updated_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastUpdatedDateTime")
    """The date and time for the last update of the test set data."""


class DescribeTestSetResponseDict(TypedDict):
    test_set_id: NotRequired[str]
    test_set_name: NotRequired[str]
    description: NotRequired[str]
    modality: NotRequired[ModalityAmazonLexModelBuildingV2TestsetsApiOrStr]
    status: NotRequired[StatusAmazonLexModelBuildingV2TestsetsApiOrStr]
    role_arn: NotRequired[str]
    num_turns: NotRequired[int]
    storage_location: NotRequired[TestSetStorageLocationDict]
    creation_date_time: NotRequired[RFC3339DateTime]
    last_updated_date_time: NotRequired[RFC3339DateTime]
