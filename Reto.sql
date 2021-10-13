-- MANEJADORES DE LA TABLA DOCTOR

-- GET
SELECT * FROM DOCTOR

-- POST
BEGIN
    INSERT INTO DOCTOR
    (ID, SPECIALTY, GRADUATE_YEAR, DEPARTMENT_ID, NAME)
    VALUES
    (:id, :specialty, :graduate_year, :department_id, :name);
    :status_code := 201;
END;

-- PUT
BEGIN
    UPDATE DOCTOR SET
    SPECIALTY = :specialty,
    GRADUATE_YEAR = :graduate_year,
    DEPARTMENT_ID = :department_id,
    NAME = :name
    WHERE ID = :id;
    :status_code := 201;
END;

-- DELETE
BEGIN
    DELETE FROM DOCTOR WHERE ID = :id;
    :status_code := 204;
END;

-- PLANTILLA DOCTOR/:id
-- GET
SELECT * FROM DOCTOR WHERE ID = :id





-- MANEJADORES DE LA TABLA CLIENT

-- GET
SELECT * FROM CLIENT

-- POST
BEGIN
    INSERT INTO CLIENT 
    (ID, NAME, EMAIL, AGE)
    VALUES
    (:id, :name, :email, :age);
    :status_code := 201;
END;

-- PUT
BEGIN
    UPDATE CLIENT SET
    NAME = :name, EMAIL = :email, AGE = :age
    WHERE ID = :id;
    :status_code := 201;
END;

-- DELETE
BEGIN
    DELETE FROM CLIENT WHERE ID = :id;
    :status_code:=204;
END;

-- PLANTILLA DOCTOR/:id
-- GET
SELECT * FROM CLIENT WHERE ID = :id






-- MANEJADORES DE LA TABLA MESSAGE

-- GET
SELECT * FROM MESSAGE

-- POST
BEGIN
    INSERT INTO MESSAGE
    (ID, MESSAGETEXT)
    VALUES
    (:id, :messagetext);
    :status_code: = 201;
END;

-- PUT
BEGIN
    UPDATE MESSAGE SET
    MESSAGETEXT = :messagetext
    WHERE ID = :id;
    :status_code:=201;
END;

-- DELETE
BEGIN
    DELETE FROM MESSAGE WHERE ID = :id;
    :status_code := 204;
END;

-- PLANTILLA DOCTOR/:id
-- GET
SELECT * FROM MESSAGE WHERE ID = :id




-- url https://gd89ec6b8232443-dbreto.adb.sa-santiago-1.oraclecloudapps.com




