from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.test_set_generation_status import TestSetGenerationStatusOrStr
from .test_set_generation_data_source import TestSetGenerationDataSource, TestSetGenerationDataSourceDict
from .test_set_storage_location import TestSetStorageLocation, TestSetStorageLocationDict


class DescribeTestSetGenerationResponse(SdkBaseModel):
    test_set_generation_id: Optional[str] = Field(default=UNSET, alias="testSetGenerationId")
    """The unique identifier of the test set generation."""

    test_set_generation_status: Optional[TestSetGenerationStatusOrStr] = Field(
        default=UNSET, alias="testSetGenerationStatus"
    )
    """The status for the test set generation."""

    failure_reasons: Optional[list[str]] = Field(default=UNSET, alias="failureReasons")
    """The reasons the test set generation failed."""

    test_set_id: Optional[str] = Field(default=UNSET, alias="testSetId")
    """The unique identifier for the test set created for the generated test set."""

    test_set_name: Optional[str] = Field(default=UNSET, alias="testSetName")
    """The test set name for the generated test set."""

    description: Optional[str] = UNSET
    """The test set description for the test set generation."""

    storage_location: Optional[TestSetStorageLocation] = Field(default=UNSET, alias="storageLocation")
    generation_data_source: Optional[TestSetGenerationDataSource] = Field(default=UNSET, alias="generationDataSource")
    role_arn: Optional[str] = Field(default=UNSET, alias="roleArn")
    """The roleARN of the test set used for the test set generation."""

    creation_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="creationDateTime")
    """The creation date and time for the test set generation."""

    last_updated_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastUpdatedDateTime")
    """The date and time of the last update for the test set generation."""


class DescribeTestSetGenerationResponseDict(TypedDict):
    test_set_generation_id: NotRequired[str]
    test_set_generation_status: NotRequired[TestSetGenerationStatusOrStr]
    failure_reasons: NotRequired[list[str]]
    test_set_id: NotRequired[str]
    test_set_name: NotRequired[str]
    description: NotRequired[str]
    storage_location: NotRequired[TestSetStorageLocationDict]
    generation_data_source: NotRequired[TestSetGenerationDataSourceDict]
    role_arn: NotRequired[str]
    creation_date_time: NotRequired[RFC3339DateTime]
    last_updated_date_time: NotRequired[RFC3339DateTime]
