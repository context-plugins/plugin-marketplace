from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .augmented_manifests_list_item import AugmentedManifestsListItem, AugmentedManifestsListItemDict
from .entity_recognizer_annotations import EntityRecognizerAnnotations, EntityRecognizerAnnotationsDict
from .entity_recognizer_documents import EntityRecognizerDocuments, EntityRecognizerDocumentsDict
from .entity_recognizer_entity_list import EntityRecognizerEntityList, EntityRecognizerEntityListDict
from .entity_types_list_item import EntityTypesListItem, EntityTypesListItemDict
from .enums.data_format2 import DataFormat2OrStr


class EntityRecognizerInputDataConfig(SdkBaseModel):
    data_format: Optional[DataFormat2OrStr] = Field(default=UNSET, alias="DataFormat")
    """The format of your training data: COMPREHEND_CSV: A CSV file that supplements your training documents. The CSV
    file contains information about the custom entities that your trained model will detect. The required format of the
    file depends on whether you are providing annotations or an entity list. If you use this value, you must provide
    your CSV file by using either the Annotations or EntityList parameters. You must provide your training documents by
    using the Documents parameter. AUGMENTED_MANIFEST: A labeled dataset that is produced by Amazon SageMaker Ground
    Truth. This file is in JSON lin"""

    entity_types: list[EntityTypesListItem] = Field(alias="EntityTypes")
    r"""The entity types in the labeled training data that Amazon Comprehend uses to train the custom entity recognizer.
    Any entity types that you don't specify are ignored. A maximum of 25 entity types can be used at one time to train
    an entity recognizer. Entity types must not contain the following invalid characters: \n (line break), \\n (escaped
    line break), \r (carriage return), \\r (escaped carriage return), \t (tab), \\t (escaped tab), space, and ,
    (comma)."""

    documents: Optional[EntityRecognizerDocuments] = Field(default=UNSET, alias="Documents")
    annotations: Optional[EntityRecognizerAnnotations] = Field(default=UNSET, alias="Annotations")
    entity_list: Optional[EntityRecognizerEntityList] = Field(default=UNSET, alias="EntityList")
    augmented_manifests: Optional[list[AugmentedManifestsListItem]] = Field(default=UNSET, alias="AugmentedManifests")
    """A list of augmented manifest files that provide training data for your custom model. An augmented manifest file
    is a labeled dataset that is produced by Amazon SageMaker Ground Truth. This parameter is required if you set
    DataFormat to AUGMENTED_MANIFEST."""


class EntityRecognizerInputDataConfigDict(TypedDict):
    data_format: NotRequired[DataFormat2OrStr]
    entity_types: list[EntityTypesListItemDict]
    documents: NotRequired[EntityRecognizerDocumentsDict]
    annotations: NotRequired[EntityRecognizerAnnotationsDict]
    entity_list: NotRequired[EntityRecognizerEntityListDict]
    augmented_manifests: NotRequired[list[AugmentedManifestsListItemDict]]
