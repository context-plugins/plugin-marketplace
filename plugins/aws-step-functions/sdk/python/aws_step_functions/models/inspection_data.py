from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .inspection_data_request import InspectionDataRequest, InspectionDataRequestDict
from .inspection_data_response import InspectionDataResponse, InspectionDataResponseDict
from .inspection_error_details import InspectionErrorDetails, InspectionErrorDetailsDict


class InspectionData(SdkBaseModel):
    input: Optional[str] = UNSET
    """The raw state input."""

    after_arguments: Optional[str] = Field(default=UNSET, alias="afterArguments")
    """The input after Step Functions applies an Arguments filter. This event will only be present when QueryLanguage
    for the state machine or individual states is set to JSONata. For more info, see Transforming data with Step
    Functions."""

    after_input_path: Optional[str] = Field(default=UNSET, alias="afterInputPath")
    """The input after Step Functions applies the InputPath filter. Not populated when QueryLanguage is JSONata."""

    after_parameters: Optional[str] = Field(default=UNSET, alias="afterParameters")
    """The effective input after Step Functions applies the Parameters filter. Not populated when QueryLanguage is
    JSONata."""

    result: Optional[str] = UNSET
    """The state's raw result."""

    after_result_selector: Optional[str] = Field(default=UNSET, alias="afterResultSelector")
    """The effective result after Step Functions applies the ResultSelector filter. Not populated when QueryLanguage is
    JSONata."""

    after_result_path: Optional[str] = Field(default=UNSET, alias="afterResultPath")
    """The effective result combined with the raw state input after Step Functions applies the ResultPath filter. Not
    populated when QueryLanguage is JSONata."""

    request: Optional[InspectionDataRequest] = UNSET
    response: Optional[InspectionDataResponse] = UNSET
    variables: Optional[str] = UNSET
    """JSON string that contains the set of workflow variables after execution of the state. The set will include
    variables assigned in the state and variables set up as test state input."""

    error_details: Optional[InspectionErrorDetails] = Field(default=UNSET, alias="errorDetails")
    after_items_path: Optional[str] = Field(default=UNSET, alias="afterItemsPath")
    """The effective input after the ItemsPath filter is applied. Not populated when the QueryLanguage is JSONata."""

    after_item_selector: Optional[str] = Field(default=UNSET, alias="afterItemSelector")
    """An array containing the inputs for each Map iteration, transformed by the ItemSelector specified in a Map
    state."""

    after_item_batcher: Optional[str] = Field(default=UNSET, alias="afterItemBatcher")
    """The effective input after the ItemBatcher filter is applied in a Map state."""

    after_items_pointer: Optional[str] = Field(default=UNSET, alias="afterItemsPointer")
    """The effective input after the ItemsPointer filter is applied in a Map state."""

    tolerated_failure_count: Optional[int] = Field(default=UNSET, alias="toleratedFailureCount")
    """The tolerated failure threshold for a Map state as defined in number of Map state iterations."""

    tolerated_failure_percentage: Optional[float] = Field(default=UNSET, alias="toleratedFailurePercentage")
    """The tolerated failure threshold for a Map state as defined in percentage of Map state iterations."""

    max_concurrency: Optional[int] = Field(default=UNSET, alias="maxConcurrency")
    """The max concurrency of the Map state."""


class InspectionDataDict(TypedDict):
    input: NotRequired[str]
    after_arguments: NotRequired[str]
    after_input_path: NotRequired[str]
    after_parameters: NotRequired[str]
    result: NotRequired[str]
    after_result_selector: NotRequired[str]
    after_result_path: NotRequired[str]
    request: NotRequired[InspectionDataRequestDict]
    response: NotRequired[InspectionDataResponseDict]
    variables: NotRequired[str]
    error_details: NotRequired[InspectionErrorDetailsDict]
    after_items_path: NotRequired[str]
    after_item_selector: NotRequired[str]
    after_item_batcher: NotRequired[str]
    after_items_pointer: NotRequired[str]
    tolerated_failure_count: NotRequired[int]
    tolerated_failure_percentage: NotRequired[float]
    max_concurrency: NotRequired[int]
