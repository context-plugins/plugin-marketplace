from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .dataset_augmented_manifests_list_item import (
    DatasetAugmentedManifestsListItem,
    DatasetAugmentedManifestsListItemDict,
)
from .dataset_document_classifier_input_data_config import (
    DatasetDocumentClassifierInputDataConfig,
    DatasetDocumentClassifierInputDataConfigDict,
)
from .dataset_entity_recognizer_input_data_config import (
    DatasetEntityRecognizerInputDataConfig,
    DatasetEntityRecognizerInputDataConfigDict,
)
from .enums.data_format import DataFormatOrStr


class DatasetInputDataConfig(SdkBaseModel):
    augmented_manifests: Optional[list[DatasetAugmentedManifestsListItem]] = Field(
        default=UNSET, alias="AugmentedManifests"
    )
    """A list of augmented manifest files that provide training data for your custom model. An augmented manifest file
    is a labeled dataset that is produced by Amazon SageMaker Ground Truth."""

    data_format: Optional[DataFormatOrStr] = Field(default=UNSET, alias="DataFormat")
    """COMPREHEND_CSV: The data format is a two-column CSV file, where the first column contains labels and the second
    column contains documents. AUGMENTED_MANIFEST: The data format"""

    document_classifier_input_data_config: Optional[DatasetDocumentClassifierInputDataConfig] = Field(
        default=UNSET, alias="DocumentClassifierInputDataConfig"
    )
    entity_recognizer_input_data_config: Optional[DatasetEntityRecognizerInputDataConfig] = Field(
        default=UNSET, alias="EntityRecognizerInputDataConfig"
    )


class DatasetInputDataConfigDict(TypedDict):
    augmented_manifests: NotRequired[list[DatasetAugmentedManifestsListItemDict]]
    data_format: NotRequired[DataFormatOrStr]
    document_classifier_input_data_config: NotRequired[DatasetDocumentClassifierInputDataConfigDict]
    entity_recognizer_input_data_config: NotRequired[DatasetEntityRecognizerInputDataConfigDict]
