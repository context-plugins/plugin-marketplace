from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ClassifierEvaluationMetrics(SdkBaseModel):
    accuracy: Optional[float] = Field(default=UNSET, alias="Accuracy")
    """The fraction of the labels that were correct recognized. It is computed by dividing the number of labels in the
    test documents that were correctly recognized by the total number of labels in the test documents."""

    precision: Optional[float] = Field(default=UNSET, alias="Precision")
    """A measure of the usefulness of the classifier results in the test data. High precision means that the classifier
    returned substantially more relevant results than irrelevant ones."""

    recall: Optional[float] = Field(default=UNSET, alias="Recall")
    """A measure of how complete the classifier results are for the test data. High recall means that the classifier
    returned most of the relevant results."""

    f1_score: Optional[float] = Field(default=UNSET, alias="F1Score")
    """A measure of how accurate the classifier results are for the test data. It is derived from the Precision and
    Recall values. The F1Score is the harmonic average of the two scores. The highest score is 1, and the worst score is
    0."""

    micro_precision: Optional[float] = Field(default=UNSET, alias="MicroPrecision")
    """A measure of the usefulness of the recognizer results in the test data. High precision means that the recognizer
    returned substantially more relevant results than irrelevant ones. Unlike the Precision metric which comes from
    averaging the precision of all available labels, this is based on the overall score of all precision scores added
    together."""

    micro_recall: Optional[float] = Field(default=UNSET, alias="MicroRecall")
    """A measure of how complete the classifier results are for the test data. High recall means that the classifier
    returned most of the relevant results. Specifically, this indicates how many of the correct categories in the text
    that the model can predict. It is a percentage of correct categories in the text that can found. Instead of
    averaging the recall scores of all labels (as with Recall), micro Recall is based on the overall score of all recall
    scores added together."""

    micro_f1_score: Optional[float] = Field(default=UNSET, alias="MicroF1Score")
    """A measure of how accurate the classifier results are for the test data. It is a combination of the Micro
    Precision and Micro Recall values. The Micro F1Score is the harmonic mean of the two scores. The highest score is 1,
    and the worst score is 0."""

    hamming_loss: Optional[float] = Field(default=UNSET, alias="HammingLoss")
    """Indicates the fraction of labels that are incorrectly predicted. Also seen as the fraction of wrong labels
    compared to the total number of labels. Scores closer to zero are better."""


class ClassifierEvaluationMetricsDict(TypedDict):
    accuracy: NotRequired[float]
    precision: NotRequired[float]
    recall: NotRequired[float]
    f1_score: NotRequired[float]
    micro_precision: NotRequired[float]
    micro_recall: NotRequired[float]
    micro_f1_score: NotRequired[float]
    hamming_loss: NotRequired[float]
