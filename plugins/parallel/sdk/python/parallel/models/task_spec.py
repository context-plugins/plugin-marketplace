from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .unions.input_schema import InputSchema, InputSchemaDict
from .unions.output_schema1 import OutputSchema1, OutputSchema1Dict


class TaskSpec(SdkBaseModel):
    """Specification for a task.

    Auto output schemas can be specified by setting ``output_schema={"type":"auto"}``. Not specifying a TaskSpec is the
    same as setting an auto output schema.

    For convenience bare strings are also accepted as input or output schemas."""

    output_schema: OutputSchema1
    """JSON schema or text fully describing the desired output from the task. Descriptions of output fields will
    determine the form and content of the response. A bare string is equivalent to a text schema with the same
    description."""

    input_schema: Optional[InputSchema] = UNSET
    """Optional JSON schema or text description of expected input to the task. A bare string is equivalent to a text
    schema with the same description."""


class TaskSpecDict(TypedDict):
    output_schema: OutputSchema1Dict
    input_schema: NotRequired[InputSchemaDict]
