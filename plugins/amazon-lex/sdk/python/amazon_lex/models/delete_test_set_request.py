from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DeleteTestSetRequest(SdkBaseModel):
    test_set_id: str = Field(alias="testSetId")
    """The test set Id of the test set to be deleted."""


class DeleteTestSetRequestDict(TypedDict):
    test_set_id: str
