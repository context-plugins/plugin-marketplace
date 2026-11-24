from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class UpdateTestSetRequest(SdkBaseModel):
    test_set_id: str = Field(alias="testSetId")
    """The test set Id for which update test operation to be performed."""

    test_set_name: str = Field(alias="testSetName")
    """The new test set name."""

    description: Optional[str] = UNSET
    """The new test set description."""


class UpdateTestSetRequestDict(TypedDict):
    test_set_id: str
    test_set_name: str
    description: NotRequired[str]
