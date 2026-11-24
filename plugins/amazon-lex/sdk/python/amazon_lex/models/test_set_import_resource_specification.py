from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.modality import ModalityOrStr
from .test_set_import_input_location import TestSetImportInputLocation, TestSetImportInputLocationDict
from .test_set_storage_location import TestSetStorageLocation, TestSetStorageLocationDict


class TestSetImportResourceSpecification(SdkBaseModel):
    test_set_name: str = Field(alias="testSetName")
    """The name of the test set."""

    description: Optional[str] = UNSET
    """The description of the test set."""

    role_arn: str = Field(alias="roleArn")
    """The Amazon Resource Name (ARN) of an IAM role that has permission to access the test set."""

    storage_location: TestSetStorageLocation = Field(alias="storageLocation")
    import_input_location: TestSetImportInputLocation = Field(alias="importInputLocation")
    modality: ModalityOrStr
    """Specifies whether the test-set being imported contains written or spoken data."""

    test_set_tags: Optional[dict[str, str]] = Field(default=UNSET, alias="testSetTags")
    """A list of tags to add to the test set. You can only add tags when you import/generate a new test set. You can't
    use the UpdateTestSet operation to update tags. To update tags, use the TagResource operation."""


class TestSetImportResourceSpecificationDict(TypedDict):
    test_set_name: str
    description: NotRequired[str]
    role_arn: str
    storage_location: TestSetStorageLocationDict
    import_input_location: TestSetImportInputLocationDict
    modality: ModalityOrStr
    test_set_tags: NotRequired[dict[str, str]]
