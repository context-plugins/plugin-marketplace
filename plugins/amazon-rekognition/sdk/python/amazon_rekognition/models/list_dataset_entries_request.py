from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ListDatasetEntriesRequest(SdkBaseModel):
    dataset_arn: str = Field(alias="DatasetArn")
    """The Amazon Resource Name (ARN) for the dataset that you want to use."""

    contains_labels: Optional[list[str]] = Field(default=UNSET, alias="ContainsLabels")
    """Specifies a label filter for the response. The response includes an entry only if one or more of the labels in
    ContainsLabels exist in the entry."""

    labeled: Optional[bool] = Field(default=UNSET, alias="Labeled")
    """Specify true to get only the JSON Lines where the image is labeled. Specify false to get only the JSON Lines
    where the image isn't labeled. If you don't specify Labeled, ListDatasetEntries returns JSON Lines for labeled and
    unlabeled images."""

    source_ref_contains: Optional[str] = Field(default=UNSET, alias="SourceRefContains")
    """If specified, ListDatasetEntries only returns JSON Lines where the value of SourceRefContains is part of the
    source-ref field. The source-ref field contains the Amazon S3 location of the image. You can use SouceRefContains
    for tasks such as getting the JSON Line for a single image, or gettting JSON Lines for all images within a specific
    folder."""

    has_errors: Optional[bool] = Field(default=UNSET, alias="HasErrors")
    """Specifies an error filter for the response. Specify True to only include entries that have errors."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """If the previous response was incomplete (because there is more results to retrieve), Amazon Rekognition Custom
    Labels returns a pagination token in the response. You can use this pagination token to retrieve the next set of
    results."""

    max_results: Optional[int] = Field(default=UNSET, alias="MaxResults")
    """The maximum number of results to return per paginated call. The largest value you can specify is 100. If you
    specify a value greater than 100, a ValidationException error occurs. The default value is 100."""


class ListDatasetEntriesRequestDict(TypedDict):
    dataset_arn: str
    contains_labels: NotRequired[list[str]]
    labeled: NotRequired[bool]
    source_ref_contains: NotRequired[str]
    has_errors: NotRequired[bool]
    next_token: NotRequired[str]
    max_results: NotRequired[int]
