from __future__ import annotations

from typing import Annotated, TypeAlias

from pydantic import Tag

from ...core import WireDiscriminator
from ..batch_task_failure_result import BatchTaskFailureResult, BatchTaskFailureResultDict
from ..batch_task_success_result import BatchTaskSuccessResult, BatchTaskSuccessResultDict

ResultCloroDevAsyncAndCloroDevCountriesAndCloroDevCreditsApi: TypeAlias = Annotated[
    Annotated[BatchTaskSuccessResult, Tag("true")] | Annotated[BatchTaskFailureResult, Tag("false")],
    WireDiscriminator("success"),
]

ResultCloroDevAsyncAndCloroDevCountriesAndCloroDevCreditsApiDict: TypeAlias = (
    BatchTaskSuccessResultDict | BatchTaskFailureResultDict
)
