from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .classifier_evaluation_metrics import ClassifierEvaluationMetrics, ClassifierEvaluationMetricsDict


class ClassifierMetadata(SdkBaseModel):
    number_of_labels: Optional[int] = Field(default=UNSET, alias="NumberOfLabels")
    """The number of labels in the input data."""

    number_of_trained_documents: Optional[int] = Field(default=UNSET, alias="NumberOfTrainedDocuments")
    """The number of documents in the input data that were used to train the classifier. Typically this is 80 to 90
    percent of the input documents."""

    number_of_test_documents: Optional[int] = Field(default=UNSET, alias="NumberOfTestDocuments")
    """The number of documents in the input data that were used to test the classifier. Typically this is 10 to 20
    percent of the input documents, up to 10,000 documents."""

    evaluation_metrics: Optional[ClassifierEvaluationMetrics] = Field(default=UNSET, alias="EvaluationMetrics")


class ClassifierMetadataDict(TypedDict):
    number_of_labels: NotRequired[int]
    number_of_trained_documents: NotRequired[int]
    number_of_test_documents: NotRequired[int]
    evaluation_metrics: NotRequired[ClassifierEvaluationMetricsDict]
