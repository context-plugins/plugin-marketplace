from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .dataset_entity_recognizer_annotations import (
    DatasetEntityRecognizerAnnotations,
    DatasetEntityRecognizerAnnotationsDict,
)
from .dataset_entity_recognizer_documents import DatasetEntityRecognizerDocuments, DatasetEntityRecognizerDocumentsDict
from .dataset_entity_recognizer_entity_list import (
    DatasetEntityRecognizerEntityList,
    DatasetEntityRecognizerEntityListDict,
)


class DatasetEntityRecognizerInputDataConfig(SdkBaseModel):
    annotations: Optional[DatasetEntityRecognizerAnnotations] = Field(default=UNSET, alias="Annotations")
    documents: DatasetEntityRecognizerDocuments = Field(alias="Documents")
    entity_list: Optional[DatasetEntityRecognizerEntityList] = Field(default=UNSET, alias="EntityList")


class DatasetEntityRecognizerInputDataConfigDict(TypedDict):
    annotations: NotRequired[DatasetEntityRecognizerAnnotationsDict]
    documents: DatasetEntityRecognizerDocumentsDict
    entity_list: NotRequired[DatasetEntityRecognizerEntityListDict]
