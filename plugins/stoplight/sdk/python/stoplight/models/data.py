from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.format1 import Format1OrStr


class Data(SdkBaseModel):
    endpoint_count: float = Field(alias="endpointCount")
    format: Format1OrStr
    project_id: str = Field(alias="projectId")
    schema_count: float = Field(alias="schemaCount")
    test_count: float = Field(alias="testCount")
    text_section_count: float = Field(alias="textSectionCount")
    trait_count: float = Field(alias="traitCount")
    version_id: str = Field(alias="versionId")
    workspace_id: str = Field(alias="workspaceId")


class DataDict(TypedDict):
    endpoint_count: float
    format: Format1OrStr
    project_id: str
    schema_count: float
    test_count: float
    text_section_count: float
    trait_count: float
    version_id: str
    workspace_id: str
