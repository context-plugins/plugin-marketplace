from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.test_set_generation_status import TestSetGenerationStatusOrStr
from .test_set_generation_data_source import TestSetGenerationDataSource, TestSetGenerationDataSourceDict
from .test_set_storage_location import TestSetStorageLocation, TestSetStorageLocationDict


class StartTestSetGenerationResponse(SdkBaseModel):
    test_set_generation_id: Optional[str] = Field(default=UNSET, alias="testSetGenerationId")
    """The unique identifier of the test set generation to describe."""

    creation_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="creationDateTime")
    """The creation date and time for the test set generation."""

    test_set_generation_status: Optional[TestSetGenerationStatusOrStr] = Field(
        default=UNSET, alias="testSetGenerationStatus"
    )
    """The status for the test set generation."""

    test_set_name: Optional[str] = Field(default=UNSET, alias="testSetName")
    """The test set name used for the test set generation."""

    description: Optional[str] = UNSET
    """The description used for the test set generation."""

    storage_location: Optional[TestSetStorageLocation] = Field(default=UNSET, alias="storageLocation")
    generation_data_source: Optional[TestSetGenerationDataSource] = Field(default=UNSET, alias="generationDataSource")
    role_arn: Optional[str] = Field(default=UNSET, alias="roleArn")
    """The roleARN used for any operation in the test set to access resources in the Amazon Web Services account."""

    test_set_tags: Optional[dict[str, str]] = Field(default=UNSET, alias="testSetTags")
    """A list of tags that was used for the test set that is being generated."""


class StartTestSetGenerationResponseDict(TypedDict):
    test_set_generation_id: NotRequired[str]
    creation_date_time: NotRequired[RFC3339DateTime]
    test_set_generation_status: NotRequired[TestSetGenerationStatusOrStr]
    test_set_name: NotRequired[str]
    description: NotRequired[str]
    storage_location: NotRequired[TestSetStorageLocationDict]
    generation_data_source: NotRequired[TestSetGenerationDataSourceDict]
    role_arn: NotRequired[str]
    test_set_tags: NotRequired[dict[str, str]]
