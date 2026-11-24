from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_decoder,
    param,
    unwrap,
)
from ..errors.bmicalculator_error import BmicalculatorErrorBody, bmicalculator_error_mapper
from ..errors.exercises_error import ExercisesErrorBody, exercises_error_mapper
from ..models.v1_bmicalculator_response import V1BmicalculatorResponse
from ..models.v1_exercises_response import V1ExercisesResponse
from ..server.server import Server


class HealthWellness:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = HealthWellnessWithRawResponse(client, server, auth)

    def bmicalculator(
        self,
        weight: float,
        height: float,
        unit: str,
        *,
        age: float | None = None,
        gender: str | None = None,
        activity_level: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1BmicalculatorResponse:
        """Calculate BMI, ideal weight, BMR, TDEE, calorie targets and macros

        Args:
            weight: Weight in kg (metric) or lbs (imperial)
            height: Height in cm (metric) or inches (imperial)
            unit: Unit system for weight and height
            age: Age in years (required for BMR/TDEE calculations)
            gender: Gender (required for BMR/TDEE calculations)
            activity_level: Activity level (required for TDEE/calorie calculations)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.bmicalculator(
                weight,
                height,
                unit,
                age=age,
                gender=gender,
                activity_level=activity_level,
                request_options=request_options,
            ),
        )

    def exercises(
        self,
        muscle: str,
        *,
        name: str | None = None,
        equipment: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1ExercisesResponse:
        """Exercises is a simple tool for getting exercise information. It returns information on various exercises.

        Args:
            muscle: The muscle group to get exercises for
            name: The name of the exercise to get information about
            equipment: The equipment used for the exercise
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.exercises(muscle, name=name, equipment=equipment, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> HealthWellnessWithRawResponse:
        return self._with_raw_response


class AsyncHealthWellness:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncHealthWellnessWithRawResponse(client, server, auth)

    async def bmicalculator(
        self,
        weight: float,
        height: float,
        unit: str,
        *,
        age: float | None = None,
        gender: str | None = None,
        activity_level: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1BmicalculatorResponse:
        """Calculate BMI, ideal weight, BMR, TDEE, calorie targets and macros

        Args:
            weight: Weight in kg (metric) or lbs (imperial)
            height: Height in cm (metric) or inches (imperial)
            unit: Unit system for weight and height
            age: Age in years (required for BMR/TDEE calculations)
            gender: Gender (required for BMR/TDEE calculations)
            activity_level: Activity level (required for TDEE/calorie calculations)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.bmicalculator(
                weight,
                height,
                unit,
                age=age,
                gender=gender,
                activity_level=activity_level,
                request_options=request_options,
            ),
        )

    async def exercises(
        self,
        muscle: str,
        *,
        name: str | None = None,
        equipment: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1ExercisesResponse:
        """Exercises is a simple tool for getting exercise information. It returns information on various exercises.

        Args:
            muscle: The muscle group to get exercises for
            name: The name of the exercise to get information about
            equipment: The equipment used for the exercise
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.exercises(
                muscle, name=name, equipment=equipment, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncHealthWellnessWithRawResponse:
        return self._with_raw_response


class HealthWellnessWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def bmicalculator(
        self,
        weight: float,
        height: float,
        unit: str,
        *,
        age: float | None = None,
        gender: str | None = None,
        activity_level: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1BmicalculatorResponse, BmicalculatorErrorBody]:
        """Calculate BMI, ideal weight, BMR, TDEE, calorie targets and macros

        Args:
            weight: Weight in kg (metric) or lbs (imperial)
            height: Height in cm (metric) or inches (imperial)
            unit: Unit system for weight and height
            age: Age in years (required for BMR/TDEE calculations)
            gender: Gender (required for BMR/TDEE calculations)
            activity_level: Activity level (required for TDEE/calorie calculations)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/bmicalculator"),
            query_params=[
                param[float]("weight", weight),
                param[float]("height", height),
                param[str]("unit", unit),
                param[float | None]("age", age),
                param[str | None]("gender", gender),
                param[str | None]("activityLevel", activity_level),
            ],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1BmicalculatorResponse],
            error_mapper=bmicalculator_error_mapper,
            request_options=request_options,
        )

    def exercises(
        self,
        muscle: str,
        *,
        name: str | None = None,
        equipment: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1ExercisesResponse, ExercisesErrorBody]:
        """Exercises is a simple tool for getting exercise information. It returns information on various exercises.

        Args:
            muscle: The muscle group to get exercises for
            name: The name of the exercise to get information about
            equipment: The equipment used for the exercise
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/exercises"),
            query_params=[
                param[str]("muscle", muscle), param[str | None]("name", name), param[str | None]("equipment", equipment)
            ],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1ExercisesResponse],
            error_mapper=exercises_error_mapper,
            request_options=request_options,
        )


class AsyncHealthWellnessWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def bmicalculator(
        self,
        weight: float,
        height: float,
        unit: str,
        *,
        age: float | None = None,
        gender: str | None = None,
        activity_level: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1BmicalculatorResponse, BmicalculatorErrorBody]:
        """Calculate BMI, ideal weight, BMR, TDEE, calorie targets and macros

        Args:
            weight: Weight in kg (metric) or lbs (imperial)
            height: Height in cm (metric) or inches (imperial)
            unit: Unit system for weight and height
            age: Age in years (required for BMR/TDEE calculations)
            gender: Gender (required for BMR/TDEE calculations)
            activity_level: Activity level (required for TDEE/calorie calculations)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/bmicalculator"),
            query_params=[
                param[float]("weight", weight),
                param[float]("height", height),
                param[str]("unit", unit),
                param[float | None]("age", age),
                param[str | None]("gender", gender),
                param[str | None]("activityLevel", activity_level),
            ],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1BmicalculatorResponse],
            error_mapper=bmicalculator_error_mapper,
            request_options=request_options,
        )

    async def exercises(
        self,
        muscle: str,
        *,
        name: str | None = None,
        equipment: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1ExercisesResponse, ExercisesErrorBody]:
        """Exercises is a simple tool for getting exercise information. It returns information on various exercises.

        Args:
            muscle: The muscle group to get exercises for
            name: The name of the exercise to get information about
            equipment: The equipment used for the exercise
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/exercises"),
            query_params=[
                param[str]("muscle", muscle), param[str | None]("name", name), param[str | None]("equipment", equipment)
            ],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1ExercisesResponse],
            error_mapper=exercises_error_mapper,
            request_options=request_options,
        )
