from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class TestSetExportSpecification(SdkBaseModel):
    test_set_id: str = Field(alias="testSetId")
    """The unique identifier of the test set."""


class TestSetExportSpecificationDict(TypedDict):
    test_set_id: str
