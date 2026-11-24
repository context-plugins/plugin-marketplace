from __future__ import annotations

from typing import TypeAlias

from ..ofrep_evaluation_failure import OfrepEvaluationFailure, OfrepEvaluationFailureDict
from ..ofrep_evaluation_success import OfrepEvaluationSuccess, OfrepEvaluationSuccessDict

Flag: TypeAlias = OfrepEvaluationSuccess | OfrepEvaluationFailure

FlagDict: TypeAlias = OfrepEvaluationSuccessDict | OfrepEvaluationFailureDict
