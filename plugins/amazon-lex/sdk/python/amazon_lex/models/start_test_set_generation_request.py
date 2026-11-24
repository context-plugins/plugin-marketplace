from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .test_set_generation_data_source import TestSetGenerationDataSource, TestSetGenerationDataSourceDict
from .test_set_storage_location import TestSetStorageLocation, TestSetStorageLocationDict


class StartTestSetGenerationRequest(SdkBaseModel):
    test_set_name: str = Field(alias="testSetName")
    """The test set name for the test set generation request."""

    description: Optional[str] = UNSET
    """The test set description for the test set generation request."""

    storage_location: TestSetStorageLocation = Field(alias="storageLocation")
    generation_data_source: TestSetGenerationDataSource = Field(alias="generationDataSource")
    role_arn: str = Field(alias="roleArn")
    """The roleARN used for any operation in the test set to access resources in the Amazon Web Services account."""

    test_set_tags: Optional[dict[str, str]] = Field(default=UNSET, alias="testSetTags")
    """A list of tags to add to the test set. You can only add tags when you import/generate a new test set. You can't
    use the UpdateTestSet operation to update tags. To update tags, use the TagResource operation."""


class StartTestSetGenerationRequestDict(TypedDict):
    test_set_name: str
    description: NotRequired[str]
    storage_location: TestSetStorageLocationDict
    generation_data_source: TestSetGenerationDataSourceDict
    role_arn: str
    test_set_tags: NotRequired[dict[str, str]]
